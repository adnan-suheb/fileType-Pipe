import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filetype'
})
export class FiletypePipe implements PipeTransform {

  transform(value: unknown) {
    console.log(value);
    if(value==='Pdf'){     
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png'     
    } else if(value==='Word'){
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/640px-Microsoft_Word_2013-2019_logo.svg.png'
    }
    else if(value==='Excel'){
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/640px-Microsoft_Excel_2013-2019_logo.svg.png'
    }
    else if(value==='Powerpoint'){
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Microsoft_PowerPoint_2013-2019_logo.svg/640px-Microsoft_PowerPoint_2013-2019_logo.svg.png'
    }
    else{
      return ''
    }
    
  }

}
