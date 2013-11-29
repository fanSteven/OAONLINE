class LoginController < ApplicationController
  layout "blank"
  def dounionlogin
      if request.get?
        session[:user_id] = nil
      else
        @user = User.login(params[:username],params[:password])
            #User.where("name = ? AND password = ?", params[:userName], params[:password]).first
        if @user
          session[:user_id] = @user.id
          redirect_to controller: 'index',action: 'index'
        else
          flash[:notice] = "Error username or passwprd"
          render 'login',alert: "Error username or passwprd"
        end
      end
  end
end
