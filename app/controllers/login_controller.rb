require File.expand_path('../../Tool/result',__FILE__)
class LoginController < ApplicationController
  layout "blank"
  def dounionlogin
      if request.get?
        session[:user_id] = nil
      else
        @user = User.login(params[:user][:name],params[:user][:password])
        if @user
          session[:user_id] = @user.id
          redirect_to controller: 'index',action: 'index'
        else
          flash[:notice] = "Error username or passwprd"
          render 'login',alert: "Error username or passwprd"
        end
      end
  end

  def e_dounionlogin
    render "e_login"
  end

  def enter_dounionlogin
    if request.get?
      session[:company_id] = nil
    else
      @company = Company.login(params[:enterprise_name],params[:enterprise_pass])
      if @company
        session[:company_id] = @company.id
        redirect_to controller: 'index',action: 'index'
      else
        flash[:notice] = "Error username or passwprd"
        render 'login',alert: "Error username or passwprd"
      end
    end
  end
end
