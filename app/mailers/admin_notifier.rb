class AdminNotifier < ApplicationMailer
  default to: ENV['NOTIFICATIONS_MAILER_TO']

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.admin_notifier.contact.subject
  #
  def raffle(raffle)
    @raffle = raffle

    mail subject: "Inscripción Sorteo Freixenet"
  end

end
