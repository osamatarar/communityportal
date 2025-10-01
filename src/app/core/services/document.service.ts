import { Injectable } from '@angular/core';

export interface StoredFile {
  id: string;
  name: string;
  content: string | ArrayBuffer | null;
}

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private files: StoredFile[] = [];

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9) + Date.now();
  }

  async saveFiles(selectedFiles: FileList): Promise<void> {

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const content = await this.readFile(file);
      this.files.push({
        id: this.generateId(),
        name: file.name,
        content,
      });
    }
  }

  getFiles(): StoredFile[] {
    return [...this.files];
  }

  deleteFile(id: string): void {
    this.files = this.files.filter(f => f.name !== id);
  }

  private readFile(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file); // base64 representation
    });
  }
}
