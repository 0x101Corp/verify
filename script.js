// Predefined list of valid certificates with additional details
const certificates = {
    "CERTx1": { name: "Ritik Tyagi", issueDate: "01-Jan-2024", position:"Frontend Intern",domain: "Web Development " , duration: "4 week program" , mode:"Remote" },
    "CERTx2": { name: "Nikhil Dabas", issueDate: "01-Jan-2024", position:"Frontend Intern",domain: "Web Development " , duration: "4 week program" ,mode:"Remote"  },
    "CERTx3": { name: "Robin Kumar", issueDate: "01-Jan-2024", position:"Frontend Intern",domain: "Web Development " , duration: "4 week program" ,mode:"Remote" },
    "CERTx4": { name: "Nakshatra Sirohi", issueDate: "01-Jan-2024", position:"Frontend Intern",domain: "Web Development " , duration: "4 week program",mode:"Remote"  }
};

document.getElementById("verify-button").addEventListener("click", function () {
    const inputId = document.getElementById("certificate-id").value.trim();
    const resultDiv = document.getElementById("result");

    if (inputId === "") {
        resultDiv.textContent = "Please enter a certificate ID.";
        resultDiv.style.color = "red";
        return;
    }

    if (certificates[inputId]) {
        const certificate = certificates[inputId];
        resultDiv.innerHTML = `
            <p style="color: green;">Certificate is valid.</p>
            
            <p><strong>Student Name:</strong> ${certificate.name}</p>
            <p><strong>Issue Date:</strong> ${certificate.issueDate}</p>
            <p><strong>Position:</strong> ${certificate.position}</p>
            <p><strong>Duration:</strong> ${certificate.duration}</p>
            <p><strong>Domain:</strong> ${certificate.domain}</p>
            <p><strong>Internship Mode:</strong> ${certificate.mode}</p>
            
        `;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Certificate is invalid.</p>`;
    }
});
