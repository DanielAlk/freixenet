class ApplicationMailer < ActionMailer::Base
  default from: ENV['NOTIFICATIONS_MAILER_USERNAME']
  layout 'mailer'
end
