import base64
from urllib import request
# from flask import Flask,request,jsonify,send_file
import os
from flask import Flask, flash, request, redirect, url_for,send_file
from werkzeug.utils import secure_filename
from PIL import Image
from flask_cors import CORS
import numpy as np
import cv2 as cv
app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/hello/', methods=['POST'])
def welcome():
    
    filter_type = request.form['filter']
    # print(filter_type)
    if filter_type == "0":
        print("here")
        file = request.files['image']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img = cv.imread(os.path.join(app.config["UPLOAD_FOLDER"],filename))
        dst = cv.blur(img,(5,5))
        # print(dst)
        cv.imwrite(os.path.join(app.config["UPLOAD_FOLDER"],filename),dst)
        img_base64 = base64.b64encode(open(os.path.join(app.config["UPLOAD_FOLDER"],filename), 'rb').read())
        response = {
            "file" : img_base64.decode()
        }
        return response,200
        
    elif filter_type == "1":
        print("here")
        file = request.files['image']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img = cv.imread(os.path.join(app.config["UPLOAD_FOLDER"],filename))
        dst = cv.GaussianBlur(img,(5,5),0)
        # print(dst)
        cv.imwrite(os.path.join(app.config["UPLOAD_FOLDER"],filename),dst)
        img_base64 = base64.b64encode(open(os.path.join(app.config["UPLOAD_FOLDER"],filename), 'rb').read())
        response = {
            "file" : img_base64.decode()
        }
        return response,200
        
    elif filter_type == "2":
        print("here")
        file = request.files['image']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img = cv.imread(os.path.join(app.config["UPLOAD_FOLDER"],filename))
        dst = cv.medianBlur(img,5)
        # print(dst)
        cv.imwrite(os.path.join(app.config["UPLOAD_FOLDER"],filename),dst)
        img_base64 = base64.b64encode(open(os.path.join(app.config["UPLOAD_FOLDER"],filename), 'rb').read())
        response = {
            "file" : img_base64.decode()
        }
        return response,200
        
    elif filter_type == "3":
        print("here")
        file = request.files['image']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img = cv.imread(os.path.join(app.config["UPLOAD_FOLDER"],filename))
        dst = cv.bilateralFilter(img,9,75,75)
        # print(dst)
        cv.imwrite(os.path.join(app.config["UPLOAD_FOLDER"],filename),dst)
        img_base64 = base64.b64encode(open(os.path.join(app.config["UPLOAD_FOLDER"],filename), 'rb').read())
        response = {
            "file" : img_base64.decode()
        }
        return response,200
        
    
        

    return "Hello"

app.run(host='0.0.0.0', port=8000)