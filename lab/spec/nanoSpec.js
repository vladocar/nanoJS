describe('Nano JS', function(){
    it('Applyies css style', function(){
        const style = 'background-color: rgb(34, 34, 34);';

        $('#a').css(style);
        
        expect(document.getElementById('a').style.cssText).toBe(style);
    });
});