package com.MedArchiv.MedArchiv.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.MedArchiv.MedArchiv.Model.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin,Long>{
	 Optional<Admin> findByEmailIdAndPassword(String emailId, String password);
}
