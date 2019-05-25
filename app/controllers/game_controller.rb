class GameController < ApplicationController




  def search_color(color)
    1.upto(16){|i|
        if  @square.line(i).split("").find_index(color) != nil
        #[0]は何行目か[1]は何列目か
        @color =  [i,@square.line(i).split("").find_index(color)]
          break
        end
    }
  end

  def top
      @square = Square.new(line_1: "0000000000000000",
                           line_2: "0000000000000000",
                           line_3: "0000000000000000",
                           line_4: "000000000000y000",
                           line_5: "0000000000000000",
                           line_6: "0000000000000000",
                           line_7: "000000g000000000",
                           line_8: "0000000000000000",
                           line_9: "0000000000000000",
                           line_10: "0000000000b00000",
                           line_11: "0000000000000000",
                           line_12: "0000000000000000",
                           line_13: "0000r00000000000",
                           line_14: "0000000000000000",
                           line_15: "0000000000000000",
                           line_16: "0000000000000000")
       @square.save

  end

  def start
      @random_color = Color.last
      @square = Square.last

      @red_color,@blue_color,@yellow_color,@green_color =
      ["r","b","y","g"].map{ |i|search_color(i)
                            @color
                          }
      @random_panel = Panel.last
      @random_panel_number = @random_panel.random_panel.scan(/[0-9]+/)
      @timer = Timer.last
  end

  def start_processing
      @square = Square.last
      if @square.exchange == nil
          @square.exchange = params[:place_1]
      else
          place_1 = @square.exchange.split("_").map(&:to_i)
          place_2 = params[:place_1].split("_").map(&:to_i)
          @square.line(place_1[0])[place_1[1]],@square.line(place_2[0])[place_2[1]] = @square.line(place_2[0])[place_2[1]],@square.line(place_1[0])[place_1[1]]
          @square.exchange = nil
      end
      @square.save
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
    random_numbers =2.times.map{number_16.sample(4)}

    1.upto(16){|i|
              16.times{|n|
                @square.line(i)[n]="0"

                        if i == random_numbers[0][0] && n == random_numbers[1][0]-1
                            @square.line(i)[n]="r"
                        elsif i == random_numbers[0][1] && n == random_numbers[1][1]-1
                            @square.line(i)[n]="b"
                        elsif i == random_numbers[0][2] && n == random_numbers[1][2]-1
                            @square.line(i)[n]="g"
                        elsif i == random_numbers[0][3] && n == random_numbers[1][3]-1
                            @square.line(i)[n]="y"
                        end

                      }
              }
      @square.save
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
