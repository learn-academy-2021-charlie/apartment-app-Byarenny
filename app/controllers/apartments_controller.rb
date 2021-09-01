class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
    def show
        apartment = Apartment.find(params[:id])
        render json: apartment
    end

end
