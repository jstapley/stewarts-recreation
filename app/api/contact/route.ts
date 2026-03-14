import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received form data:', data);
    
    // Initialize Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Insert into Supabase
    const { data: contactData, error } = await supabase
      .from('sr_contacts')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          vehicle_type: data.vehicleType,
          message: data.message
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }

    console.log('Contact saved to Supabase:', contactData);

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: 'Stewarts Recreation <contact@stewartsrecreation.com>',
        to: 'raystewart89@gmail.com', // Update with actual email
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Vehicle Type:</strong> ${data.vehicleType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails - contact is already saved
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact saved successfully',
      contactId: contactData[0].id
    });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}