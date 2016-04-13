# to import run bundle exec rake import

require 'csv'

desc "Import ids from csv file"
task :import => [:environment] do

  file = "db/borderland_codes.csv"

  CSV.foreach(file, :headers => true) do |row|
    Ticket.create(:id_code => row[0])
  end

end