import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received form data:', data);
    
    // Check if token exists
    if (!process.env.GHL_API_TOKEN) {
      console.error('GHL_API_TOKEN is not set in environment variables');
      return NextResponse.json({ 
        success: false, 
        error: 'API token not configured. Please add GHL_API_TOKEN to .env.local' 
      }, { status: 500 });
    }
    
    // Split name into first and last
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      firstName: firstName,
      lastName: lastName || firstName, // Use firstName as fallback if no last name
      email: data.email,
      phone: data.phone,
      locationId: 'OQAVkhsYclIcoUAvzQEW',
      source: 'Website Contact Form',
      tags: ['website-lead'],
      customFields: [
        {
          key: 'vehicle_type',
          field_value: data.vehicleType || 'Not specified'
        },
        {
          key: 'initial_message',
          field_value: data.message
        }
      ]
    };

    console.log('Sending to GHL API v2:', payload);

    // GHL API v2 endpoint - more reliable with tokens
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log('GHL Response status:', response.status);
    console.log('GHL Raw response:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      result = { raw: responseText };
    }

    if (response.ok || response.status === 200 || response.status === 201) {
      return NextResponse.json({ 
        success: true, 
        message: 'Contact created successfully',
        contactId: result.contact?.id || result.id
      });
    } else {
      console.error('GHL API Error:', result);
      return NextResponse.json({ 
        success: false, 
        error: result.message || result.msg || 'Failed to create contact',
        details: result
      }, { status: response.status });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}