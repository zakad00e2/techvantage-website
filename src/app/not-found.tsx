/**
 * 404 Not Found Page
 */
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center px-4">
            <h1 className="text-8xl font-extrabold text-primary-600">404</h1>
            <h2 className="mt-4 text-2xl font-bold text-neutral-900">الصفحة غير موجودة</h2>
            <p className="mt-2 text-neutral-600 max-w-md mx-auto">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            </p>
            <Link
              href="/ar"
              className="mt-8 inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
