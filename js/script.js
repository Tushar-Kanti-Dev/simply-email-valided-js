const submit = document.getElementById('submit-button').addEventListener('click', function() {
        const input = document.getElementById('input-field');
        const inputValue = input.value;
        console.log(inputValue);
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputValue.match(mailformat)) {
            const valid = document.getElementById('valid').style.display = 'block';

        } else {
            const invalid = document.getElementById('invalid').style.display = 'block';
        }

        console.log('checked');
    })
    /* function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        } else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    } */