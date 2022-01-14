const { test } = QUnit

QUnit.module('fizzbuzz', function () {
    test('létezik-e', (assert) => {
        assert.ok(fizzbuzz, "Létezik");
    });
    test('függvény-e', (assert) => {
        assert.ok(typeof fizzbuzz==="function", "függvény");
    });
    test('3-mal és 5-tel nem oszthatóak', (assert) => {
        let tomb=[1,2,4,7,8,11,13,14]
        tomb.forEach(function(elem){
            assert.equal(fizzbuzzErtek(elem),elem)
        })
    });
    test('3-mal', (assert) => {
        let tomb=[3,6,9,12]
        tomb.forEach(function(elem){
            assert.equal(fizzbuzzErtek(elem),"fizz")
        })
    });
    test('5-tel', (assert) => {
        let tomb=[5,10]
        tomb.forEach(function(elem){
            assert.equal(fizzbuzzErtek(elem),"buzz")
        })
    });
    
  
})