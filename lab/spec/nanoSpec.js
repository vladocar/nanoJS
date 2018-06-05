describe('Nano JS', function(){
    const elementId = 'a';

    beforeEach(function(){
        document.getElementById(elementId).removeAttribute("style")
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

    describe("when getting attribute is requested", function(){
        it('Returns string empty if there is no attribute', function(){
            var value = $('#' + elementId).getAttr('invalid-attribute');
            
            expect('').toBe(value);
        });

        it('Returns string empty if there is no element', function(){
            var value = $('#' + 'invalid-element-id').getAttr('invalid-attribute');
            
            expect('').toBe(value);
        });

        it('Returns the value of an attribute', function(){
            var attributeValue = 'on';
            $('#' + elementId).attr('class', attributeValue);
    
            var value = $('#' + elementId).getAttr('class');
            
            expect(value).toBe(attributeValue);
        });
    
    });

    it("Removes an attribute", function(){
        const attributeValue = 'on';
        const attribute = 'class';
        $('#' + elementId).attr(attribute, attributeValue);
        expect(attributeValue).toBe($('#' + elementId).getAttr(attribute));

        $('#' + elementId).removeAttr(attribute);
       
        expect('').toBe($('#' + elementId).getAttr(attribute));
    });
});