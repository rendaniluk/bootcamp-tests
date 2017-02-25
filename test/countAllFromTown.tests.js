describe('The countAllFromTown function', function(){

    it('should count in string separated by comma & return number for certain town', function(){
        assert.equal(0, allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'));
    });
    it('should count in string separated by comma & return number for certain town', function(){

        assert.deepEqual(4, allFromTown('CL 124,CY 567,CL 441,CL 345, CJ 456,CL 341','CL'));
    });
});
