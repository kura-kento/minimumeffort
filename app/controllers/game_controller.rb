class GameController < ApplicationController


  def top
      EXCHANGE[:first] = nil
  end

  def start
      @random_color = Color.last
      @red_color,@blue_color,@yellow_color,@green_color = SQUARES.map{ |key,value| value.split('-').map(&:to_i) }

      @random_panel = Panel.last
      @random_panel_number = @random_panel.random_panel.scan(/[0-9]+/)
      @timer = Timer.last
  end

  def start_processing

      if EXCHANGE[:first] == nil
          SQUARES.each{|key,value|
              EXCHANGE[:first] = params[:place_1]  if value == params[:place_1]
          }
      else
          colors = []
          SQUARES.each{|key,value|
              colors << key  if  value == EXCHANGE[:first] || value == params[:place_1]
          }
          case colors.count
          when 1
            SQUARES[colors[0]] = params[:place_1]
          when 2
            SQUARES[colors[0]] , SQUARES[colors[1]] = SQUARES[colors[1]] , SQUARES[colors[0]]
          end
          EXCHANGE[:first] = nil
      end
      redirect_to("/start")
  end

  def random_color
      @random_color = Color.last
      @random = rand(1..17).divmod(4)
      @random_color.number = @random[1]+1
      @random_color.color =
          case @random[0]
              when 0
                 "red"
              when 1
                 "blue"
              when 2
                 "yellow"
              when 3
                 "green"
              when 4
                 "purple"
          end
          if @random[0] == 4
            @random_color.number = nil
          end

      @random_color.save
      @timer = Timer.last
      @timer.count = 60
      @timer.save
      redirect_to("/start")
  end

  def random_square
      @square = Square.last
      number_16 = []
      1.upto(16).each{|i|   number_16  << i    unless  i == 8 || i == 9  }
      random_numbers = 2.times.map{number_16.sample(4)}
      SQUARES.each_with_index{|key_value,i|
          SQUARES[key_value[0]] = "#{random_numbers[0][i]}-#{random_numbers[1][i]-1}"
      }
      redirect_to("/start")

  end

  def random_panel
      @random_panel = Panel.last
      number_16 = []
      panel = []
      2.times{ 1.upto(15).each{|i|   number_16  << i    unless  i==1 || i == 8 || i == 9  } }
      permutation = number_16.permutation(2).to_a.uniq
      permutation.delete([2,5])
      permutation.delete([2,6])
      permutation.delete([2,10])
      permutation.delete([2,11])
      permutation.delete([15,5])
      permutation.delete([15,6])
      permutation.delete([15,12])
      permutation.delete([15,13])
      permutation.delete([5,2])
      permutation.delete([6,2])
      permutation.delete([11,2])
      permutation.delete([12,2])
      permutation.delete([2,15])
      permutation.delete([3,15])
      permutation.delete([11,15])
      permutation.delete([12,15])
      permutation.delete([7,7])
      permutation.delete([7,8])
      permutation.delete([7,9])
      permutation.delete([7,10])
      permutation.delete([10,7])
      permutation.delete([10,8])
      permutation.delete([10,9])
      permutation.delete([10,10])
      permutation.delete([8,7])
      permutation.delete([9,7])
      permutation.delete([8,10])
      permutation.delete([9,10])
      17.times{
          a = permutation.sample
          3.times{|first|
              3.times{|last|
                permutation.delete([a[0]+first-1,a[1]+last-1])
              }
          }
          panel << a
      }
      @random_panel.random_panel = panel
      @random_panel.save
      redirect_to("/start")
  end

  def timer_60
    @timer = Timer.last
    @timer.count = 0
    @timer.save
    sleep(60)
    redirect_to("/start")
  end
end
