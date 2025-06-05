import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class XrayAnalysisService {
  private apiUrl = 'http://localhost:8000/api/analyze-xray'; // Đúng endpoint của backend

  constructor(private http: HttpClient) {}

  analyzeXray(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.apiUrl, formData);
  }
}
