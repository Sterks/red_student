json.extract! page, :id, :name, :email, :phone, :work, :created_at, :updated_at
json.url page_url(page, format: :json)