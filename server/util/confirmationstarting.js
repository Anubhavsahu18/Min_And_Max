



exports.onfirmation = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Request Sent</title>
        <style>
            /* Include Tailwind CSS CDN */
            @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        </style>
    </head>
    <body class="bg-gray-100 p-8">
        <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-2xl font-bold text-gray-900 mb-4">Request Sent</h1>
            <p class="text-gray-700 mb-4">Dear [UserName],</p>
            <p class="text-gray-700 mb-4">Your request has been successfully sent to the admin. We will notify you once it has been reviewed and processed.</p>
            <p class="text-gray-700 mb-4">Thank you for your patience and understanding.</p>
            <p class="text-gray-700 mb-4">Best regards,</p>
            <p class="text-gray-700 mb-4">The [YourCompany] Team</p>
            <div class="mt-6">
                <p class="text-gray-600 text-sm">If you have any questions or need further assistance, please contact us at <a href="mailto:support@yourcompany.com" class="text-blue-500">support@yourcompany.com</a>.</p>
            </div>
        </div>
    </body>
    </html>`
  }

