class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
  end

  def create
    Report.create(report_params)
  end

  private
  def report_params
    params.require(:report).permit(:body, :image)
  end

end
