describe('Nano JS', function(){
    it('Applyies css style', function(){
        const elementId = 'a';
        const style = 'background-color: rgb(34, 34, 34);';

        $('#' + elementId).css(style);
        
        expect(document.getElementById(elementId).style.cssText).toBe(style);
    });
});