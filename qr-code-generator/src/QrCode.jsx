import { useState } from "react"

export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    async function generateQR(){
        try{
            setLoading(true);
            const data = document.getElementById("dataInput").value;
            const size = document.getElementById("sizeInput").value;
            if(!data || !size){
                alert("Please enter data for QR code");
                return;
            }
            const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=${size}x${size}`;
            setImg(url);
            setLoading(false);
            alert("QR code generated successfully");
        }
        catch(err){
            console.log("Error generating QR code:", err);
            setLoading(false);
        }
        finally{
            setLoading(false);
        }
    }
    function downloadQR(){
        fetch(img)
            .then(response => response.blob())
            .then((blob) => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'qr-code.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((err) => {
                console.log("Error downloading QR code:", err)
            });
    }
    return (
    <div className="app-container">
        <h2>QR Code Generator</h2>
        {loading && <p className="loading">Loading...</p>}
        {img && <img src={img} className="qrimg" />}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR code:
            </label>
            <input type="text" id="dataInput" onChange={(e)=>setQrData(e.target.value)} placeholder="Url" />

            <label htmlFor="sizeInput" className="input-label">
                Image size:
            </label>
            <input type="text" id="sizeInput" onChange={(e)=>setqrSize(e.target.value)} placeholder="(e.g., 150)" />
            <button className="generateButton" onClick={()=>generateQR()}>Generate QR Code</button>
            <button className="downloadButton" onClick={()=>downloadQR()}>Download QR Code</button>
        </div>
        <p className="footer">Designed by <a href="https://github.com/seetharaman52/">Seetharaman</a></p>
    </div>
  )
}
