function calculate() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let perimeter = 2 * (Number(width) + Number(height));
    let area = (Number(width) * Number(height));
    
    document.getElementById('perimeterResult').innerText = 'Perimeter:' + perimeter;
    document.getElementById('areaResult').innerText = 'Area:' + area;
}