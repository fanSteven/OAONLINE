class MenuToRolesController < ApplicationController
  before_action :set_menu_to_role, only: [:show, :edit, :update, :destroy]

  # GET /menu_to_roles
  # GET /menu_to_roles.json
  def index
    @menu_to_roles = MenuToRole.all
  end

  # GET /menu_to_roles/1
  # GET /menu_to_roles/1.json
  def show
  end

  # GET /menu_to_roles/new
  def new
    @menu_to_role = MenuToRole.new
  end

  # GET /menu_to_roles/1/edit
  def edit
  end

  # POST /menu_to_roles
  # POST /menu_to_roles.json
  def create
    @menu_to_role = MenuToRole.new(menu_to_role_params)

    respond_to do |format|
      if @menu_to_role.save
        format.html { redirect_to @menu_to_role, notice: 'Menu to role was successfully created.' }
        format.json { render action: 'show', status: :created, location: @menu_to_role }
      else
        format.html { render action: 'new' }
        format.json { render json: @menu_to_role.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /menu_to_roles/1
  # PATCH/PUT /menu_to_roles/1.json
  def update
    respond_to do |format|
      if @menu_to_role.update(menu_to_role_params)
        format.html { redirect_to @menu_to_role, notice: 'Menu to role was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @menu_to_role.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /menu_to_roles/1
  # DELETE /menu_to_roles/1.json
  def destroy
    @menu_to_role.destroy
    respond_to do |format|
      format.html { redirect_to menu_to_roles_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_to_role
      @menu_to_role = MenuToRole.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def menu_to_role_params
      params.require(:menu_to_role).permit(:role_id, :menu_id)
    end
end
