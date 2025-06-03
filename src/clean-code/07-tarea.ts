(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProps {
      id: string;
      type: HtmlType;
    }

    class HtmlElement {

      public id: string;
      public type: HtmlType;

      constructor({ id, type }: HtmlElementProps) {
        this.id = id;
        this.type = type;
      }
      
    }

    interface InputAttributesProps {
      value: string;
      placeholder: string;
    }

    class InputAttributes {

      public value: string;
      public placeholder: string;

      constructor({ value, placeholder }: InputAttributesProps ){
        this.value = value;
        this.placeholder = placeholder;
      }

    }

    class InputEvents {

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};

    }

    interface InputElementProps {
      id: string;
      value: string; 
      placeholder: string;
      type: HtmlType;
    }

    class InputElement {

      public htmlElement: HtmlElement;
      public inputAttributes: InputAttributes;
      public inputEvents: InputEvents;

      constructor({ id, placeholder, type, value }: InputElementProps){
        this.htmlElement = new HtmlElement({ id, type });
        this.inputAttributes = new InputAttributes({ value, placeholder });
        this.inputEvents = new InputEvents();
      }

    }




    //? Idea para la nueva clase InputElement
// 'Fernando', 'Enter first name', 'txtName'
    const nameField = new InputElement({ 
      id: '123', 
      value: 'Arturo', 
      placeholder: 'Enter first name', 
      type: 'input' 
    });

    console.log({ nameField });

})()