class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def line(line_number)
      case line_number
      when 1
        return self.line_1
      when 2
        return self.line_2
      when 3
        return self.line_3
      when 4
        return self.line_4
      when 5
        return self.line_5
      when 6
        return self.line_6
      when 7
        return self.line_7
      when 8
        return self.line_8
      when 9
        return self.line_9
      when 10
        return self.line_10
      when 11
        return self.line_11
      when 12
        return self.line_12
      when 13
        return self.line_13
      when 14
        return self.line_14
      when 15
        return self.line_15
      when 16
        return self.line_16
      end
  end


end
