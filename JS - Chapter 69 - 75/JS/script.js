// const user = {
//     firstName: "Saad",
//     lastName: "Nadeem",
//     fullName: function () {
//         return (this.firstName.trim() + " " + this.lastName.trim()).trim();
//     },
//     age: 17,
//     city: "Faisalabad",
//     country: "Pakistan",
//     CNIC: "3310006280627",
//     dob: "2008-07-16"
// }

// users.push(user)
// console.log('user', user)
// console.log('users', users)

// const users = []

// const handleSubmit = () => {

//     event.preventDefault()

//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let email = document.getElementById("email").value;
//     let dob = document.getElementById("dob").value;

//     firstName = firstName.trim()
//     lastName = lastName.trim()

//     let fullName = (firstName + " " + lastName).trim()
//     if (firstName.length < 3) {
//         showNotification("Please enter your first name", "error")
//         return;
//     }
//     if (email.length < 5) {
//         showNotification("Please enter your email address", "error")
//         return;
//     }
//     if (!dob) {
//         showNotification("Please enter your date of birth(dob)", "error")
//         return;
//     }
//     console.log('firstName', firstName)
//     console.log('lastName', lastName)
//     console.log('fullName', fullName)
//     console.log('email', email)
//     console.log('dob', dob)

//     const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

//     const user = {
//         id, firstName, lastName, fullName, email, dob
//     }
//     user.status = "active"
//     user.createdAt = new Date().getTime();

//     console.log('user', user)

//     users.push(user)
//     console.log('users', users)
// }



// function showTable() {
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const firstName = document.getElementById("firstName").value.trim();
//         const lastName = document.getElementById("lastName").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const dob = document.getElementById("dob").value;

//         if (!firstName || !lastName || !email || !dob) {
//             showNotification("Please fill all fields", "error");
//             return;
//         }

//         const outputHtml = `
//     <div class="table-responsive">
//       <table class="table table-bordered table-striped mb-0">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Date of Birth</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>${firstName}</td>
//             <td>${lastName}</td>
//             <td>${email}</td>
//             <td>${dob}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   `;

//         document.getElementById("Output").innerHTML = outputHtml;
//     };


// }

// function printUsers() {
//     if (!users.length) {
//         showNotification("There are no users available at this time.", "error")
//         return;
//     }
//     console.log('users', users)
// }

// function clearButton() {
//     document.getElementById("Output").innerHTML = ""
// }

// // showNotification Function
// function showNotification(msg, type, duration) {
//     let bgColor;

//     switch (type) {
//         case "success":
//             bgColor = "linear-gradient(to right, #1d976c, #93f9b9)"
//             break;
//         case "error":
//             bgColor = "linear-gradient(to right, #93291e, #ed213a)"
//             break;
//         default:
//             bgColor: "#000"
//             break;
//     }

//     Toastify({
//         text: msg,
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: bgColor,
//         },
//     }).showToast();
//     return;
// }


function showImage() {
    const modalEl = document.getElementById("imageModal");
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
}

const users = [];

function handleSubmit(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;

    if (!firstName || !lastName || !email || !dob) {
        showNotification("Please fill out all fields", "error");
        return;
    }

    if (firstName.length < 3) {
        showNotification("Please enter your first name", "error");
        return;
    }

    if (email.length < 5) {
        showNotification("Please enter your email address", "error");
        return;
    }

    const user = {
        id: Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`.trim(),
        email,
        dob,
        status: "active",
        createdAt: Date.now()
    };

    users.push(user);
    showNotification("User added successfully", "success");
    e.target.reset();
}

function calculateAge(dob) {
    const birthDate = new Date(dob);
    if (Number.isNaN(birthDate.getTime())) return "-";

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Agar birthday abhi is saal nahi aaya, age -1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}


function showTable() {
    if (!users.length) {
        showNotification("There are no users available at this time. Please add a user first.", "error");
        return;
    }

    const rows = users.map((u, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${u.firstName}</td>
      <td>${u.lastName}</td>
      <td>${u.fullName}</td>
      <td>${u.email}</td>
      <td>${u.dob}</td>
            <td>${calculateAge(u.dob)}</td>
    </tr>
  `).join("");

    document.getElementById("Output").innerHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function printUsers() {
    if (!users.length) {
        showNotification("There are no users available at this time. Please add a user first.", "error");
        return;
    }
    console.log("users", users);
}

function clearButton() {
    document.getElementById("Output").innerHTML = "";
}

function showNotification(msg, type) {
    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1d976c, #93f9b9)";
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)";
            break;
        default:
            bgColor = "#000";
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: { background: bgColor }
    }).showToast();
}




// Footer year 
let now = new Date();
document.getElementById("year").innerText = now.getFullYear();
