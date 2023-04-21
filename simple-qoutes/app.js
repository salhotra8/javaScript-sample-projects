let quoteBtn = document.getElementById('new-quote');
let qoute = document.querySelector('.content');
let person = document.querySelector('.author');

let qoutes = [
    {
        qoute: "nfooifowebfwibfiw   iuwfwf uwenf wefi w9f wif wif w fwuif wfwf w9j eg9ee gerig  ierbgiuegouer geuguegbeuig iuebg iiwbwefuwb fwnf weofnwnf we",
        person: "bow pikachu"
    },
    {
        qoute: "hahahahhaha  iwbwefuwb fwnf weofnwnf we",
        person: "hihihih"
    },
    {
        qoute: "lakne i f fw dgdhfbd bjjf panf  ufqo noq fbf",
        person: "chikaaa"
    }
]


quoteBtn.addEventListener('click', () => {
    let index = Math.floor(Math.random() * qoutes.length);

    qoute.firstChild.nextSibling.textContent = qoutes[index].qoute;
    person.firstChild.nextSibling.textContent = qoutes[index].person;

})


