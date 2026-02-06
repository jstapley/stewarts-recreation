# GoHighLevel Integration Setup Guide

## Overview
The contact form is set up to integrate with GoHighLevel (GHL) CRM with your location ID: `OQAVkhsYclIcoUAvzQEW`

## Setup Steps

### Option 1: Using GHL Webhooks (Recommended)

1. **Create a Webhook in GHL:**
   - Log into your GoHighLevel account
   - Go to Settings → Integrations → Webhooks
   - Click "Add Webhook"
   - Set the webhook type to "Incoming Webhook"
   - Copy the Webhook URL (it will look like: `https://services.leadconnectorhq.com/hooks/WEBHOOK_ID/WEBHOOK_TOKEN`)

2. **Update the Contact Form:**
   - Open `app/contact/page.tsx`
   - Find line 28: `const response = await fetch('https://services.leadconnectorhq.com/hooks/WEBHOOK_ID/WEBHOOK_TOKEN'`
   - Replace `WEBHOOK_ID/WEBHOOK_TOKEN` with your actual webhook URL

3. **Configure the Webhook in GHL:**
   - In the webhook settings, map the following fields:
     - `contact.name` → Contact Name
     - `contact.email` → Email
     - `contact.phone` → Phone
     - `contact.customFields.vehicleType` → Custom Field (create if needed)
     - `contact.customFields.message` → Notes or Custom Field

### Option 2: Using GHL API Directly

1. **Get Your API Key:**
   - Go to Settings → API
   - Create or copy your API key

2. **Create a Server-Side API Route:**
   
   Create `app/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';

   export async function POST(request: Request) {
     const data = await request.json();
     
     const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer YOUR_GHL_API_KEY`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         locationId: 'OQAVkhsYclIcoUAvzQEW',
         firstName: data.name.split(' ')[0],
         lastName: data.name.split(' ').slice(1).join(' '),
         email: data.email,
         phone: data.phone,
         customFields: {
           vehicleType: data.vehicleType,
           message: data.message
         }
       }),
     });

     if (response.ok) {
       return NextResponse.json({ success: true });
     } else {
       return NextResponse.json({ success: false }, { status: 500 });
     }
   }
   ```

3. **Update the form to use the API route:**
   In `app/contact/page.tsx`, change the fetch URL (line 28) to:
   ```typescript
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   });
   ```

4. **Add environment variable:**
   Create `.env.local`:
   ```
   GHL_API_KEY=your_api_key_here
   ```

### Option 3: Using GHL Forms (Simplest)

1. **Create a form in GHL:**
   - Go to Sites → Forms
   - Create a new form with fields: Name, Email, Phone, Vehicle Type, Message
   - Get the form embed code

2. **Replace the form in contact page:**
   - Instead of the custom form, embed the GHL form directly

## Testing

1. Fill out the contact form on your website
2. Check GHL dashboard for new contact
3. Verify all fields are populated correctly

## Custom Fields in GHL

Make sure these custom fields exist in your GHL location:
- `vehicleType` (dropdown: Boat/Marine, Snowmobile, ATV/Side-by-Side, Other)
- `message` (text area)

To create custom fields:
1. Go to Settings → Custom Fields
2. Add new field for "Vehicle Type" and "Message"
3. Note the field IDs and update the integration code if needed

## Troubleshooting

- **CORS errors:** Use Option 2 (API route) to avoid CORS issues
- **Fields not showing:** Make sure custom fields are created in GHL first
- **No contacts created:** Check webhook/API key is correct and active
- **Console errors:** Check browser console for detailed error messages

## Security Notes

- Never commit API keys to git
- Use environment variables for sensitive data
- Consider adding rate limiting to prevent spam
- Add reCAPTCHA if needed for additional protection
