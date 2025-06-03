type Size = '' | 'S' | 'M' | 'XL';

class Product {

  public constructor(
    public name: string,
    public price: number = 0,
    public size: Size = '',
  ){}

  public isProductReady = () => {
    for( const key in this ) {
      switch( typeof this[key] ) {
        case 'string':
          if( (this[key] as string).length <= 0 ) throw new Error(`${ key } is empty`);
        break;
        case 'number':
          if( (this[key] as number) <= 0 ) throw new Error(`${ key } is zero`);
        break;
        default:
          throw new Error(`${ key } is not valid`);
      }
    }
  }

  public toString = () => {
    if( !this.isProductReady ) return;

    return `${ this.name } (${ this.price }), ${ this.size }`;
  }

}

( () => {

  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log(bluePants.toString());

})();