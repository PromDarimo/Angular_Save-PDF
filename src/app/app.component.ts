import { Component } from '@angular/core';
import jspdf from 'jspdf';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dsf';
  pdfSrc: any;
  data = {
    name: 'Miura Isuzu',
    email: 'spiderman2099@gmail.com',
  };
 
  generatePDF() {
    const doc = new jspdf();
 
    const content = `Name: ${this.data.name}\nEmail: ${this.data.email}`;
 
    doc.text(content, 10, 10);
 
    const pdf = doc.output('blob');
    
    FileSaver.saveAs(pdf, 'template.pdf');
 
  }
}
