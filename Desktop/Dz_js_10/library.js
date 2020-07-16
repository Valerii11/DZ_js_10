'use strict';


class Validator {

    constructor() {
        this.nameOk = false;
        this.emailOk = false;
        this.subjectOk = false;
        this.commentOk = false;
    }

    checkName(name_val) {
        let reg = /^[a-zA-Z][a-zA-Z0-9_\-]{5,15}$/;
        this.nameOk = reg.test(name_val);
       }
    checkEmail(email_val) {
       let reg = /^[a-zA-Z0-9_\.\-]+@[a-z]+\.[a-z]{2,}$/;
        this.emailOk = reg.test(email_val);
    }
    checkSubject(subject_val) {
        let reg = /^[a-zA-Z][a-zA-Z0-9_\-]{5,15}$/;
        this.subjectOk = reg.test(subject_val);
    }
    checkComment(comment_val) {
         let reg = /^[A-Z][a-zA-Z0-9_\.\,\-]{6,}$/;
        this.commentOk = reg.test(comment_val);
    }

    validate() {
        return (this.nameOk == true && this.emailOk == true && this.subjectOk == true && this.commentOk == true)
    }
}



class Controller {

    constructor(nameId, emailId, subjectId, commentId, form1Id, info1, info2, info3, info4) {
        this.name = document.getElementById(nameId);
        this.email = document.getElementById(emailId);
        this.subject = document.getElementById(subjectId);
        this.comment = document.getElementById(commentId);
        this.form1 = document.getElementById(form1Id);

        this.validator = new Validator();


        this.name_info = document.getElementById(info1);
        this.email_info = document.getElementById(info2);
        this.subject_info = document.getElementById(info3);
        this.comment_info = document.getElementById(info4);


    }
    activateLiseners() {
        this.name.addEventListener('blur', () => {
            this.validator.checkName(this.name.value);
            if (this.validator.nameOk) {
                this.name.style.boxShadow = '0 0 green, 0 0 10px green';
                this.name_info.style.display = 'none';
            } else {
                this.name.style.boxShadow = '0 0 red, 0 0 10px red';
                this.name_info.style.display = 'inline';
            }
        });
        this.email.addEventListener('blur', () => {
            this.validator.checkEmail(this.email.value);
            if (this.validator.emailOk) {
                this.email.style.boxShadow = '0 0 green, 0 0 10px green';
                this.email_info.style.display = 'none';
            } else {
                this.email.style.boxShadow = '0 0 red, 0 0 10px red';
                this.email_info.style.display = 'inline';
            }
        });
        this.subject.addEventListener('blur', () => {
            this.validator.checkSubject(this.subject.value);
             if (this.validator.subjectOk) {
                this.subject.style.boxShadow = '0 0 green, 0 0 10px green';
                this.subject_info.style.display = 'none';
            } else {
                this.subject.style.boxShadow = '0 0 red, 0 0 10px red';
                this.subject_info.style.display = 'inline';
            }
        });
          this.comment.addEventListener('blur', () => {
            this.validator.checkComment(this.comment.value);
             if (this.validator.commentOk) {
                this.comment.style.boxShadow = '0 0 green, 0 0 10px green';
                this.comment_info.style.display = 'none';
            } else {
                this.comment.style.boxShadow = '0 0 red, 0 0 10px red';
                this.comment_info.style.display = 'inline';
            }
        });
        this.form1.addEventListener('submit', () => {
            alert(this.validator.validate());
            if (this.validator.validate()) {
                this.form1.submit();
            } else {
                alert('You can`t send massege!')
            }

        });

    }

}
