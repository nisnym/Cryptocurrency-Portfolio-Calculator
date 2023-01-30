class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end
    
    def current_price
        # url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?"
        # request = HTTParty.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin', headers: {"Accept" => "application/json"})
        request = HTTParty.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=' + self.slug, headers: {"X-CMC_PRO_API_KEY" => "80e6f60e-457e-42ba-aaef-3f23bc865667"})
        response = JSON.parse(request.body)['data']['1']['quote']['USD']['price']
    end

end
# so we are calling that api in here from where we will be calling the api 