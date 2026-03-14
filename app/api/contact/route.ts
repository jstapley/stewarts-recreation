import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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