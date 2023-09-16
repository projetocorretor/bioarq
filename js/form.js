$(document).ready(function () {
  emailjs.init('-tEeEkGS-yfpbQMUa')

  const errorMsg = $('#error_msg').hide()
  const successMsg = $('#success_msg').hide()

  $('#phone').mask('(00) 0000-0000');

  $('#form').on('submit', (e) => {
    e.preventDefault()

    const name = $('#name').val()
    const phone = $('#phone').val()
    const email = $('#email').val()

    const is_wz = $('#is_wz')
    const is_phone = $('#is_phone')
    const is_mail = $('#is_mail')
    let prefence_contact = ''

    if (!name || !phone || !email) {
      return errorMsg.show()
    }

    if (!is_wz.is(':checked') && !is_phone.is(':checked') && !is_mail.is(':checked')) {
      return errorMsg.show()
    }

    if (!is_wz.is(':checked')) prefence_contact = 'whatsapp'
    else if (!is_phone.is(':checked')) prefence_contact = 'telefone'
    else prefence_contact = 'email'

    errorMsg.hide()

    // Send email
    // service_ctlt977
    const formParams = {
      from_name: email,
      to_name: 'dsi@dsimoveis.com',
      name,
      email,
      celphone: phone,
      prefence_contact
    }
    emailjs.send('bioarq', 'contato-bioarq', formParams)
      .then(function () {
        successMsg.show()
      }, function (error) {
        alert('Não foi possivel enviar o email')
      });
  })
})
