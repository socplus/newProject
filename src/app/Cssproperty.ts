export class CssProperty {
left: string;
imageSrc: string;

border:string;

constructor(left: string,imageSrc: string ) {
this.left = left;
this.imageSrc = imageSrc;
}
setLeft(left: string) {
this.left = left;
}
setImageSrc(imageSrc: string) {
this.imageSrc = imageSrc;
}
getLeft() :string {
return this.left;
}
getImageSrc() :string {
return this.imageSrc;
}

setBorder(border: string) {
this.border = border;
}
getBorder() :string {
return this.border;
}
}
