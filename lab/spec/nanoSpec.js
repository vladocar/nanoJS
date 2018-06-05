describe('Nano JS', function(){
    const elementId = 'a';

    beforeEach(function(){
        document.getElementById(elementId).removeAttribute("style");
        document.getElementById(elementId).removeAttribute("class");
    });

    it('Applyies css style', function(){
        const style = 'background-color: rgb(34, 34, 34);';

        $('#' + elementId).css(style);
        
        expect(document.getElementById(elementId).style.cssText).toBe(style);
    });

    it('Sets a value to an attribute', function(){
        $('#' + elementId).attr('class', 'on');

        expect(document.getElementById(elementId).outerHTML).toContain('class="on"');
    });

    describe('when getting attribute is requested', function(){
        it('Returns string empty if there is no attribute', function(){
            let value = $('#' + elementId).getAttr('invalid-attribute');
            
            expect('').toBe(value);
        });

        it('Returns string empty if there is no element', function(){
            let value = $('#' + 'invalid-element-id').getAttr('invalid-attribute');
            
            expect('').toBe(value);
        });

        it('Returns the value of an attribute', function(){
            let attributeValue = 'on';
            $('#' + elementId).attr('class', attributeValue);
    
            let value = $('#' + elementId).getAttr('class');
            
            expect(value).toBe(attributeValue);
        });
    
    });

    it('Removes an attribute', function(){
        const attributeValue = 'on';
        const attribute = 'class';
        $('#' + elementId).attr(attribute, attributeValue);
        expect(attributeValue).toBe($('#' + elementId).getAttr(attribute));

        $('#' + elementId).removeAttr(attribute);
       
        expect('').toBe($('#' + elementId).getAttr(attribute));
    });

    it('Animates', function(){
        const style = 'transition: all 2s ease-in-out; transform: scale(1) rotate(360deg) rotateX(1deg) rotateY(1deg) translate(0px, 0px) skew(0deg, 0deg); opacity: 1;';

        $('#' + elementId).animate('2', '1','360','1','1','0','0', '0','0','1');

        expect(document.getElementById(elementId).style.cssText).toBe(style);
    });

    describe('When setting an event is requested', function(){
        it('Does nothing if the element does not exist', function(){
            let eventThrown = false;
            $('#' + 'invalid-elemet-id').on('click', function(){ eventThrown = true; });
    
            document.getElementById(elementId).click();
    
            expect(eventThrown).toBeFalsy();
        });

        it('Sets an event', function(){
            let eventThrown = false;
            $('#' + elementId).on('click', function(){ eventThrown = true; });
    
            document.getElementById(elementId).click();
    
            expect(eventThrown).toBeTruthy();
        });
    });

    it('Adds a class name', function(){
        const className = 'class-name';

        $('#' + elementId).addClass(className);

        expect(className).toContain(document.getElementById(elementId).className);
    });

    it('Toggles a class name', function(){
        const className = 'class-name';

        $('#' + elementId).toggleClass(className);

        expect(className).toContain(document.getElementById(elementId).className);
    });
});