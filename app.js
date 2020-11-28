
var table_body = document.getElementById("table_body")

var arr = [
    {
        name: "Hiba Khan",
        fname: "Ameer-udd-din",
        dob: "13-09-1999",
        email: "hibakhan130999@gmail.com",
        contact: "0315-1084684",
        sname: "BMJ",
        sclass: "10"
    },

    {
        name: "Anum",
        fname: "Rehman",
        dob: "01-07-1997",
        email: "anumrehman99@gmail.com",
        contact: "0300-123456",
        sname: "UIT",
        sclass: "16"
    },

    {
        name: "Zahab Noor",
        fname: "Ameer-udd-din",
        dob: "24-12-2002",
        email: "noorzahab24@gmail.com",
        contact: "0342-2133763",
        sname: "College",
        sclass: "12"
    },

    {
        name: "Mawrah Khan",
        fname: "Ameer-udd-din",
        dob: "24-03-1997",
        email: "khanmawrah03@gmail.com",
        contact: "0302-2228483",
        sname: "UOK",
        sclass: "18"
    },

    {
        name: "Sadia Rehan",
        fname: "Rehan",
        dob: "15-08-1995",
        email: "sadiar08@gmail.com",
        contact: "0313-0123456",
        sname: "UOK",
        sclass: "18"
    }
]

for (var i = 0; i < arr.length; i++) {
    var row_1 = document.createElement("tr")

    var data_1 = document.createElement("td")
    var data_1_input = document.createElement("input")
    data_1_input.setAttribute("value", arr[i].name)
    data_1_input.setAttribute("disabled", true)
    data_1_input.setAttribute("onkeypress", "save_record()")
    data_1.appendChild(data_1_input)

    var data_2 = document.createElement("td")
    var data_2_input = document.createElement("input")
    data_2_input.setAttribute("value", arr[i].fname)
    data_2_input.setAttribute("disabled", true)
    data_2_input.setAttribute("onkeypress", "save_record()")
    data_2.appendChild(data_2_input)

    var data_3 = document.createElement("td")
    var data_3_input = document.createElement("input")
    data_3_input.setAttribute("value", arr[i].dob)
    data_3_input.setAttribute("disabled", true)
    data_3_input.setAttribute("onkeypress", "save_record()")
    data_3.appendChild(data_3_input)

    var data_4 = document.createElement("td")
    var data_4_input = document.createElement("input")
    data_4_input.setAttribute("value", arr[i].email)
    data_4_input.setAttribute("disabled", true)
    data_4_input.setAttribute("onkeypress", "save_record()")
    data_4.appendChild(data_4_input)

    var data_5 = document.createElement("td")
    var data_5_input = document.createElement("input")
    data_5_input.setAttribute("value", arr[i].contact)
    data_5_input.setAttribute("disabled", true)
    data_5_input.setAttribute("onkeypress", "save_record()")
    data_5.appendChild(data_5_input)

    var data_6 = document.createElement("td")
    var data_6_input = document.createElement("input")
    data_6_input.setAttribute("value", arr[i].sname)
    data_6_input.setAttribute("disabled", true)
    data_6_input.setAttribute("onkeypress", "save_record()")
    data_6.appendChild(data_6_input)

    var data_7 = document.createElement("td")
    var data_7_input = document.createElement("input")
    data_7_input.setAttribute("value", arr[i].sclass)
    data_7_input.setAttribute("disabled", true)
    data_7_input.setAttribute("onkeypress", "save_record()")
    data_7.appendChild(data_7_input)

    var edit = document.createElement("button")
    edit.setAttribute("class", "btn btn-primary")
    edit.setAttribute("onclick", "edit_record()")
    var edit_text = document.createTextNode("Edit")
    edit.appendChild(edit_text)

    var del = document.createElement("button")
    del.setAttribute("class", "btn btn-danger")
    del.setAttribute("onclick", "delete_record()")
    var del_text = document.createTextNode("Delete")
    del.appendChild(del_text)

    row_1.appendChild(data_1)
    row_1.appendChild(data_2)
    row_1.appendChild(data_3)
    row_1.appendChild(data_4)
    row_1.appendChild(data_5)
    row_1.appendChild(data_6)
    row_1.appendChild(data_7)
    row_1.appendChild(edit)
    row_1.appendChild(del)

    table_body.appendChild(row_1)
}

function submit_data() {
    var student_details = {
        name: document.getElementById("name").value,
        fname: document.getElementById("fname").value,
        dob: document.getElementById("dob").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        sname: document.getElementById("sname").value,
        sclass: document.getElementById("class").value
    };

    if (/([^\s])/.test(student_details.name && student_details.fname && student_details.dob && student_details.contact && student_details.sname && student_details.sclass)) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(student_details.email)) {
            var table_row = document.createElement("tr")

            var data_1 = document.createElement("td")
            var data_1_input = document.createElement("input")
            data_1_input.setAttribute("value", student_details.name)
            data_1_input.setAttribute("disabled", true)
            data_1_input.setAttribute("onkeypress", "save_record()")
            data_1.appendChild(data_1_input)

            var data_2 = document.createElement("td")
            var data_2_input = document.createElement("input")
            data_2_input.setAttribute("value", student_details.fname)
            data_2_input.setAttribute("disabled", true)
            data_2_input.setAttribute("onkeypress", "save_record()")
            data_2.appendChild(data_2_input)

            var data_3 = document.createElement("td")
            var data_3_input = document.createElement("input")
            data_3_input.setAttribute("value", student_details.dob)
            data_3_input.setAttribute("disabled", true)
            data_3_input.setAttribute("onkeypress", "save_record()")
            data_3.appendChild(data_3_input)

            var data_4 = document.createElement("td")
            var data_4_input = document.createElement("input")
            data_4_input.setAttribute("value", student_details.email)
            data_4_input.setAttribute("disabled", true)
            data_4_input.setAttribute("onkeypress", "save_record()")
            data_4.appendChild(data_4_input)

            var data_5 = document.createElement("td")
            var data_5_input = document.createElement("input")
            data_5_input.setAttribute("value", student_details.contact)
            data_5_input.setAttribute("disabled", true)
            data_5_input.setAttribute("onkeypress", "save_record()")
            data_5.appendChild(data_5_input)

            var data_6 = document.createElement("td")
            var data_6_input = document.createElement("input")
            data_6_input.setAttribute("value", student_details.sname)
            data_6_input.setAttribute("disabled", true)
            data_6_input.setAttribute("onkeypress", "save_record()")
            data_6.appendChild(data_6_input)

            var data_7 = document.createElement("td")
            var data_7_input = document.createElement("input")
            data_7_input.setAttribute("value", student_details.sclass)
            data_7_input.setAttribute("disabled", true)
            data_7_input.setAttribute("onkeypress", "save_record()")
            data_7.appendChild(data_7_input)

            var edit = document.createElement("button")
            edit.setAttribute("onclick", "edit_record()")
            var edit_text = document.createTextNode("Edit")
            edit.appendChild(edit_text)

            var del = document.createElement("button")
            del.setAttribute("onclick", "delete_record()")
            var del_text = document.createTextNode("Delete")
            del.appendChild(del_text)

            table_row.appendChild(data_1)
            table_row.appendChild(data_2)
            table_row.appendChild(data_3)
            table_row.appendChild(data_4)
            table_row.appendChild(data_5)
            table_row.appendChild(data_6)
            table_row.appendChild(data_7)
            table_row.appendChild(edit)
            table_row.appendChild(del)

            table_body.appendChild(table_row)

            swal("", "Student's Record Has Been Added Successfully!", "success");

            document.getElementById("name").value = ""
            document.getElementById("fname").value = ""
            document.getElementById("dob").value = ""
            document.getElementById("email").value = ""
            document.getElementById("contact").value = ""
            document.getElementById("sname").value = ""
            document.getElementById("cname").value = ""
        }
        else {
            swal("Email Error", "Please Enter Correct Email Address", "error");
        }
    }
    else {
        swal("Error", "Please Fill All Fields", "error");
    }
}

function cancel_data() {
    document.getElementById("name").value = ""
    document.getElementById("fname").value = ""
    document.getElementById("dob").value = ""
    document.getElementById("email").value = ""
    document.getElementById("contact").value = ""
    document.getElementById("sname").value = ""
    document.getElementById("cname").value = ""
}

function edit_record() {
    var parent = event.target.parentNode
    parent.firstChild.firstChild.disabled = false
    console.log(parent.firstChild.firstChild)
    parent.childNodes[1].firstChild.disabled = false
    parent.childNodes[2].firstChild.disabled = false
    parent.childNodes[3].firstChild.disabled = false
    parent.childNodes[4].firstChild.disabled = false
    parent.childNodes[5].firstChild.disabled = false
    parent.childNodes[6].firstChild.disabled = false
}

function save_record() {
    if (event.keyCode === 13) {
        var parent = event.target.parentNode.parentNode
        parent.firstChild.firstChild.disabled = true
        parent.childNodes[1].firstChild.disabled = true
        parent.childNodes[2].firstChild.disabled = true
        parent.childNodes[3].firstChild.disabled = true
        parent.childNodes[4].firstChild.disabled = true
        parent.childNodes[5].firstChild.disabled = true
        parent.childNodes[6].firstChild.disabled = true
    }
}

function delete_record() {
    event.target.parentNode.remove()
}

// 03[0-9]{2}-(?!1234567)(?!1111111)(?!7654321)[0-9]{7}