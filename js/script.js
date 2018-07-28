// BUDOWA FUNKCJI NA PRZYKŁADZIE ZADANIA 9.1" - SKŁADA SIĘ Z 3 ETAPÓW.


// 1. Deklaracja funkcji "getTriangleArea". Paramtry funkcji: "a", "h".

function getTriangleArea(a, h) {	
  
  // 2. Cialo funkcji (logika) (wewnątrz klamr{}) Wynik logiki przekazany do zmiennej "value" w celu jej wywołania.
  
  var value = a*h/2;
  
  console.log("inFunc Result is: " + value);

  // 2.a) Wywolanie funcji słowem "return" tzw. zwracanie wartości funkcji (tj.przeliczenie logiki z zastosow. parametrów)
  return value;
}


// 3. Przekazanie wartości funkcji "getTriangleArea" do zmniennej "triangle1Area". 
// Umożliwia to dalsze użycie jej wyniku (logiki) przy użyciu tej zmiennej "triangle1Area".

var triangle1Area = getTriangleArea(10, 15);

console.log("Result is: " + triangle1Area);

