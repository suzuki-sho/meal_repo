class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
    @room = Room.find(params[:room_id])
    @reports = @room.reports.includes(:user)
  end

  def create
    @room = Room.find(params[:room_id])
    @report = @room.reports.new(report_params)
    if @report.save
      redirect_to room_reports_path(@room)
    else
      @reports = @room.reports.includes(:user)
      render :index
    end
  end

  private
  def report_params
    params.require(:report).permit(:body, :image).merge(user_id: current_user.id)
  end

end
