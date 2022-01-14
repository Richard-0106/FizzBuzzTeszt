const { test } = QUnit

QUnit.module('Romai számok', function () {
    test('létezik-e', (assert) => {
        assert.ok(romaiSzamok, "Létezik");
    });
    test('függvény-e', (assert) => {
        assert.ok(typeof romaiSzamok === "function", "függvény");
    });
    
    test('1', (assert) => {
        assert.equal(romaiSzamok(1), "I");
    });
     test('2', (assert) => {
       assert.equal(romaiSzamok(2), "II");
    });
    test('3', (assert) => {
        assert.equal(romaiSzamok(3), "III");
    });
    test('4', (assert) => {
        assert.equal(romaiSzamok(4), "IV");
    });
    test('5', (assert) => {
        assert.equal(romaiSzamok(5), "V");
    });
    test('6', (assert) => {
        assert.equal(romaiSzamok(6), "VI");
    });
    test('7', (assert) => {
        assert.equal(romaiSzamok(7), "VII");
    });
    test('8', (assert) => {
        assert.equal(romaiSzamok(8), "VIII");
    });
    test('9', (assert) => {
        assert.equal(romaiSzamok(9), "IX");
    });
    test('10', (assert) => {
        assert.equal(romaiSzamok(10), "X");
    });
    test('11', (assert) => {
        assert.equal(romaiSzamok(11), "XI");
    });
    test('12', (assert) => {
        assert.equal(romaiSzamok(12), "XII");
    });
    test('13', (assert) => {
        assert.equal(romaiSzamok(13), "XIII");
    });
    test('14', (assert) => {
        assert.equal(romaiSzamok(14), "XIV");
    });
    test('19', (assert) => {
        assert.equal(romaiSzamok(19), "XIX");
    });
    test('24', (assert) => {
        assert.equal(romaiSzamok(24), "XXIV");
    });
    test('39', (assert) => {
        assert.equal(romaiSzamok(39), "XXXIX");
    });
})