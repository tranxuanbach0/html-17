let radius = Number(prompt("Nhập vào bán kính (r):"));
let height = Number(prompt("Nhập vào chiều cao (h):"));
if (radius <= 0 || height <= 0) {
    console.log("Bán kính và chiều cao phải là các số dương.");
    alert("Bán kính và chiều cao phải là các số dương.");
} else {
    let dientichmatben = 2 * Math.PI * radius * height;
    let totalSurfaceArea = dientichmatben + 2 * Math.PI * radius * radius;
    let volume = Math.PI * radius * radius * height;
    let circumference = 2 * Math.PI * radius;
    console.log(`Diện tích xung quanh: ${dientichmatben}`);
    alert(`Diện tích xung quanh: ${dientichmatben.toFixed(2)}`);
    console.log(`Diện tích toàn phần: ${totalSurfaceArea.toFixed(2)}`);
    alert(`Diện tích toàn phần: ${totalSurfaceArea.toFixed(2)}`);
    console.log(`Thể tích hình trụ: ${volume.toFixed(2)}`);
    alert(`Thể tích hình trụ: ${volume.toFixed(2)}`);
    console.log(`Chu vi đáy: ${circumference.toFixed(2)}`);
    alert(`Chu vi đáy: ${circumference.toFixed(2)}`);
}
