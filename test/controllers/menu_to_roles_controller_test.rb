require 'test_helper'

class MenuToRolesControllerTest < ActionController::TestCase
  setup do
    @menu_to_role = menu_to_roles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:menu_to_roles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create menu_to_role" do
    assert_difference('MenuToRole.count') do
      post :create, menu_to_role: { menu_id: @menu_to_role.menu_id, role_id: @menu_to_role.role_id }
    end

    assert_redirected_to menu_to_role_path(assigns(:menu_to_role))
  end

  test "should show menu_to_role" do
    get :show, id: @menu_to_role
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @menu_to_role
    assert_response :success
  end

  test "should update menu_to_role" do
    patch :update, id: @menu_to_role, menu_to_role: { menu_id: @menu_to_role.menu_id, role_id: @menu_to_role.role_id }
    assert_redirected_to menu_to_role_path(assigns(:menu_to_role))
  end

  test "should destroy menu_to_role" do
    assert_difference('MenuToRole.count', -1) do
      delete :destroy, id: @menu_to_role
    end

    assert_redirected_to menu_to_roles_path
  end
end
