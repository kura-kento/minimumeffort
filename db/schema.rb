# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_25_082653) do

  create_table "colors", force: :cascade do |t|
    t.text "color"
    t.integer "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "symbol"
  end

  create_table "panels", force: :cascade do |t|
    t.text "random_panel"
    t.text "wall"
    t.text "panel_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "squares", force: :cascade do |t|
    t.text "line_1"
    t.text "line_2"
    t.text "line_3"
    t.text "line_4"
    t.text "line_5"
    t.text "line_6"
    t.text "line_7"
    t.text "line_8"
    t.text "line_9"
    t.text "line_10"
    t.text "line_11"
    t.text "line_12"
    t.text "line_13"
    t.text "line_14"
    t.text "line_15"
    t.text "line_16"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "exchange"
  end

  create_table "timers", force: :cascade do |t|
    t.integer "count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
