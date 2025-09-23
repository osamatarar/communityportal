import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from './../services/loaderService';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  const skipLoaderByHeader = req.headers.get('X-Skip-Loader') === 'true';
  if (skipLoaderByHeader) {
    req = req.clone({
      headers: req.headers.delete('X-Skip-Loader')
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
