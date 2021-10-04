package com.fsm.order.controllers.exception;

import java.net.ConnectException;
import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler {
	@ExceptionHandler(ConnectException.class)
	public ResponseEntity<StandardError>ConnectException(ConnectException e,HttpServletRequest request){
		HttpStatus 	status = HttpStatus.BAD_GATEWAY;
		StandardError error = new StandardError();
		error.setTimestamp(Instant.now());
		error.setStatus(status.value());
		error.setMessage(e.getMessage());
		error.setError("ConnectException, it was not possible to communicate");
		error.setPath(request.getRequestURI());
		return ResponseEntity.status(status).body(error);
	}
}
