import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received form data:', data);
    
    // Initialize Supabase client with service role key
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
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

    // Send emails
          try {
            // 1. Notification email to business
            await resend.emails.send({
              from: 'Stewarts Recreation <contact@stewartsrecreation.com>',
              to: 'stewarts@bellnet.ca',
              bcc: 'jeff@stapleyinc.com',
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

        // 2. Confirmation email to customer
        await resend.emails.send({
          from: 'Stewarts Recreation <contact@stewartsrecreation.com>',
          to: data.email,
          subject: 'Thank you for contacting Stewarts Recreation',
          html: `
            <h2>Thank you for contacting us!</h2>
            <p>Hi ${data.name},</p>
            <p>We've received your message and will get back to you shortly.</p>
            
            <h3>Your Message:</h3>
            <p><strong>Vehicle Type:</strong> ${data.vehicleType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
            
            <hr>
            <p><strong>Contact Us:</strong></p>
            <p>Phone: (705) 382-3331</p>
            <p>Email: stewarts@bellnet.ca</p>
            <p>326 Ontario Street, Burk's Falls, ON P0A 1C0</p>
            
            <p><small>If you didn't submit this form, please disregard this email.</small></p>
          `
        });
        
        console.log('Emails sent successfully');
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Don't fail the request if email fails - contact is already saved
      }

      // 2. Confirmation email to customer
      await resend.emails.send({
        from: 'Stewarts Recreation <contact@stewartsrecreation.com>',
        to: data.email,
        subject: 'Thank you for contacting Stewarts Recreation',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Hi ${data.name},</p>
          <p>We've received your message and will get back to you shortly.</p>
          
          <h3>Your Message:</h3>
          <p><strong>Vehicle Type:</strong> ${data.vehicleType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          
          <hr>
          <p><strong>Contact Us:</strong></p>
          <p>Phone: (705) 382-3331</p>
          <p>Email: stewarts@bellnet.ca</p>
          <p>326 Ontario Street, Burk's Falls, ON P0A 1C0</p>
          
          <p><small>If you didn't submit this form, please disregard this email.</small></p>
        `
      });
      
      console.log('Emails sent successfully');
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