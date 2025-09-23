import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../enviroment/environment'
@Injectable({ providedIn: 'root' })

export class GenericHttpService {

  private readonly baseUrl = environment.apiUrl; // 👈 from environment.ts

  constructor(private http: HttpClient) {}
  
  getAll<T>(endpoint: string, options: { skipLoader?: boolean }): Observable<T[]> 
  {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`, {
      headers: this.buildHeaders(options),
    });
  }

  getById<T>(endpoint: string, id: number | string, options?: { skipLoader?: boolean }): Observable<T> 
  {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.buildHeaders(options),
    });
  }

  post<T>(endpoint: string, entity: any, options?: { skipLoader?: boolean }): Observable<T> 
  {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, entity, {
      headers: this.buildHeaders(options),
    });
  }

  update<T>(endpoint: string, id: number | string, entity: any, options?: { skipLoader?: boolean }): Observable<T> 
  {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`, entity, {
      headers: this.buildHeaders(options),
    });
  }

  delete(endpoint: string, id: number | string, options?: { skipLoader?: boolean }): Observable<void> 
  {
    return this.http.delete<void>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.buildHeaders(options),
    });
  }

  private buildHeaders(options?: { skipLoader?: boolean }): HttpHeaders 
  {
    let headers = new HttpHeaders();

    if (options?.skipLoader) {
      headers = headers.set('X-Skip-Loader', 'true');
    }

    return headers;
  }
}

export interface APIResponse<T = any> {
  Result: T;
  IsSuccess: boolean;
  ErrorMessage?: string;
}