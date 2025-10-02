import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import SignaturePad from 'signature_pad';

@Component({
    selector: 'app-signaturepad',
    templateUrl: './signaturepad.component.html',
    styleUrls: ['./signaturepad.component.css'],
    standalone: true,
    imports: [CommonModule,ButtonModule]
})
export class SignaturepadComponent implements OnInit, AfterViewInit {
    @ViewChild('signatureCanvas') signatureCanvas!: ElementRef<HTMLCanvasElement>;
    private signaturePad!: SignaturePad;

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const canvas = this.signatureCanvas.nativeElement;
        this.resizeCanvas();
        this.signaturePad = new SignaturePad(canvas, {
            backgroundColor: '#ffffff',
            penColor: 'black'
        });
    }

    clearSignature(): void {
        this.signaturePad.clear();
    }

    // ✅ Save as PNG
    saveAsPNG(): void {
        if (this.signaturePad.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }
        const data = this.signaturePad.toDataURL('image/png');
        this.download(data, 'signature.png');
    }

    // ✅ Save as JPG
    saveAsJPG(): void {
        if (this.signaturePad.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }
        const data = this.signaturePad.toDataURL('image/jpeg');
        this.download(data, 'signature.jpg');
    }

    // ✅ Save as SVG
    saveAsSVG(): void {
        if (this.signaturePad.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }
        const data = this.signaturePad.toDataURL('image/svg+xml');
        this.download(data, 'signature.svg');
    }

    // ✅ Save as SVG with background (white)
    saveAsSVGWithBg(): void {
        if (this.signaturePad.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }

        const svgData = this.signaturePad.toDataURL('image/svg+xml');
        const svgText = atob(svgData.split(',')[1]);

        // Add white background rect
        const svgWithBg = svgText.replace('<svg ', '<svg style="background:white;" ');

        const blob = new Blob([svgWithBg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        this.download(url, 'signature-bg.svg', false);
        URL.revokeObjectURL(url);
    }

    // Helper function for downloading files
    private download(dataURL: string, filename: string, isDataUrl: boolean = true): void {
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    private resizeCanvas(): void {
        const canvas = this.signatureCanvas.nativeElement;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d')!.scale(ratio, ratio);
    }
}
