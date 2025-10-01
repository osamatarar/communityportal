import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from './../services/loaderService';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  const token = localStorage.getItem('authToken');
  const skipLoaderByHeader = req.headers.get('X-Skip-Loader') === 'true';
  if (skipLoaderByHeader) {
    req = req.clone({
      headers: req.headers.delete('X-Skip-Loader'),
    });
  }

  const skipTokenByHeader = req.headers.get('X-Skip-Token') === 'true';
  const isExternalUpload = req.url.includes('https://www.primefaces.org/cdn/api/upload.php');

  if (!skipTokenByHeader && !isExternalUpload) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

if (!skipLoaderByHeader) {
    loadingService.show();
  }

  return next(req).pipe(
    finalize(() => {
      if (!skipLoaderByHeader) {
        loadingService.hide();
      }
    })
  );
};
